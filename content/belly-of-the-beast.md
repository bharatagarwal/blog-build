---
categories: []
date: "2024-03-18T12:57:56.059Z"
slug: "belly-of-the-beast"
title: "Spring from the belly of the beast"
---

# How to slay interviews and not be slain by them

Even though you might have your issues with whiteboard/ds-algo interviews, they are inevitable.

> The only way out is through the belly of the beast, so cry havoc and let slip the dogs of whiteboard.

## Interviewing:

- is distinct from being a good engineer  
- is learnable -- no one starts off being amazing  
- requires special knowledge -- you will fail most interviews if you haven't learned the material sufficiently  
- required practice -- several months typically  
- will be uncomfortable -- confront discomfort head on

- Failing is a rite of passage  
- Interviewers typically expect you to fail -- it's just statistically likely

## Prep

- Read Algorithm Design Manual  
- Watch lectures  
- 130 leetcode problems (mostly medium), 5-10 programming contests, handful of random problems

Usually takes 2-3 months

- Leverage mocks to combat stage fright  
- Set a timer when solving problems -- 45 minutes  
- Practice until you're able to solve most problems in this timeframe.  
- Try coding contests that have a multi-hour window to solve 3-4  
- helps prioritisation and working under pressure

## Programming Language

Choose most comfortable.

- Review other people's solutions in chosen language  
- Great way to learn tricks / features  
- Get comfortable with collections if using Python  
- Be comfortable with stdlib efficiencies  
- Check for common interview questions in language

## Scheduling interviews

- Start with company you'd say no to, end with company you'd say yes to  
- Will help to have competing offers in hand

- Once you're negotiating salaries, if you've been accepted, they've already spent a lot of money on you, and it will take a lot of money to find someone else. So ask for a little bit more.

## Super Heuristic

- **S**tate the problem  
- What am I solving exactly?  
- Input, Output  
- Constraints?  
- Expected performance

- **U**nderstand the problem  
- Play with the problem  
- Draw a picture  
- Cases  
- Null/Empty  
- Boiled down to common problem type  
- Obvious data structure or algorithm  
- Linked Lists: Do I need to dereference current item to get to the next one  
- Array with two pointers / sliding window: is having two indexes or a region of input helpful  
- Stack: LIFO?  
- Queue: FIFO?  
- Trees: Parent/child relationship? Can I exclude have of the input at each step?  
- Graphs: Nodes? Edges? Directed? Cyclic? Weighted?  
- Backtracking - Show I try every possible answer?  
- Dynamic: Are bigger cases a combination of smaller cases?  
- Find minimum no of ways  
- Find longest of many  
- Recursion: Base case?  
- Math: Is there a simple equation?  
- Sorting: Does ordering simplify problem?  
- Binary: Can binary operations simplify state mutation?

- **P**lan your approach  
- Plain language list of steps  
- Talk about performance  
- Try a few normal cases with plain language procedure  
- Consider common edge cases  
- Ask if you've missed an edge case  
- How could your approach fail  
- Data structure  
- is huge: 10^9 nodes, elements etc  
- has identical elements  
- Can't fit memory  
- has a single element, node, possible value  
- is empty  
- Linked Lists: contain a cycle  
- Collections  
- heterogenous types  
- methods are called a lot  
- invalid index  
- Trees:  
- full  
- lopsided  
- Graphs:  
- cycles  
- disjoint  
- all weights are 0, huge, negative  
- Backtrack:  
- No solution exists  
- Correct solution will be first/last tried  
- Recursion:  
- Exceeds max depth  
- Base case never math  
- Math: Division by zero?  
- Sorting: Already sorted?  
- Binary: Every bit is set/unset

- **E**xecute your approach  
- Check with interviewer  
- Start with ugly-but-working code  
- Remove unnecessary parts  
- Stub and compose  
- comments  
- write tests  
- then implement  
- make small functions, and invoke inside main  
- enables quick assertions  
- Structured logging  
- Have a format ready  
- Identify a library that will do this  
- Use a debugger

- **R**eview your answer  
- Ask aloud  
- How could approach be improved  
- Edge cases  
- Performance double-check  
- Are you reinventing the wheel?

## Misc advice:  
- Politely ask to get straight to the question after 5 minutes  
- Be prepared for followup questions  
- Get a feel for this with interviewers  
- Treat interviews like someone you're tutoring  
- Say meaningful things -- better to be quiet than make noise  
- Stub out boring parts with a `tokenize()` or `validate()` function