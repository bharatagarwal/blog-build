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
                // Check if slug is not null, otherwise default to an empty string or a placeholder
                const slug = post.slug ? post.slug.current : 'no-slug';
                frontmatter += `\n${field}: "${slug}"`;
              } else if (field === "categories") {
                // Check if categories is not null, otherwise default to an empty array
                const categories = post.categories ? post.categories.map((cat) => `"${cat.title}"`).join(", ") : '';
                frontmatter += `\n${field}: [${categories}]`;
              } else if (field === "date") {
                // Check if date is not null, otherwise default to a placeholder or current date
                const date = post.date ? post.date : 'no-date';
                frontmatter += `\n${field}: "${date}"`;
              } else if (field === "body") {
                // Skip body here, it will be processed separately
              } else {
                frontmatter += `\n${field}: "${post[field]}"`;
              }
            });
            frontmatter += "\n---\n\n";
        
            // Convert the body to Markdown
            const markdownBody = toMarkdown(post.body, { serializers });
            const wholePost = `${frontmatter}${markdownBody}`;

            const filePath = `./content/${post.slug.current}.md`;
            fs.outputFile(filePath, wholePost, function (err, data) {
              if (err) {
                return console.log(err);
              }
            });

            console.log(`Created: ${filePath}`);
          })
        );
    } catch (error) {
      utils.build.failBuild("Failure message", { error });
    }
  },
};