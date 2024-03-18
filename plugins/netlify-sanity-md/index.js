module.exports = {
  onPreBuild: async ({ utils, packageJson }) => {
    console.log("Starting plugin");
    //imports
    const fs = require("fs-extra");
    const toMarkdown = require("@sanity/block-content-to-markdown");
    const { createClient } = require('@sanity/client');
    const client = createClient({
      projectId: "ypg8urwn",
      dataset: "production",
      useCdn: false,
      apiVersion: "2023-05-03",
    });

    //add any serializers for your portable text
    const serializers = {
      types: {
        code: (props) =>
          "```" + props.node.language + "\n" + props.node.code + "\n```",
      },
    };

    fs.readdir("./content", (err, files) => {
      if (err) console.log(err);
      else {
        files.forEach((file) => {
          console.log(`Deleting: ${file}`);
          fs.unlink(`content//${file}`, (err) => {
            if (err) throw err;

          });
        });
      }
    });

    try {
      await client
        .fetch(`*[_type == "post"]{categories[]->{title}, date, slug, title, body}`)
        .then((res) =>
          res.map(async (post) => {
            //output YAML frontmatter here
            let frontmatter = "---";
            Object.keys(post).forEach((field) => {
              if (field === "slug") {
                return (frontmatter += `\n${field}: "${post.slug.current}"`);
              } else if (field === "categories") {
                return (frontmatter += `\n${field}: [${post.categories.map(
                  (cat) => `"${cat.title}"`
                )}]`);
              } else if (field === "body") {
                return;
              } else {
                frontmatter += `\n${field}: "${post[field]}"`;
              }
            });
            frontmatter += "\n---\n\n";

            const wholePost = `${frontmatter}${toMarkdown(post.body, {
              serializers,
            })}`;

            const filePath = `./content/${post.slug.current}.md`;
            fs.outputFile(filePath, wholePost, function (err, data) {
              if (err) {
                return console.log(err);
              }
            });
          })
        );
    } catch (error) {
      utils.build.failBuild("Failure message", { error });
    }
  },
};