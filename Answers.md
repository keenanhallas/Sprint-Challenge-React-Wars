# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

React JS is a Javascript UI component library used to make creating/using front end components, as well as working with/keeping track of data, much faster & easier. React solves the problem of the DOM being difficult to work with by:

1.) Utilizing the virtual DOM, which is much faster than the regular DOM, and only mounts components to the actual DOM when relevent data changes

2.) Abstracting away the cumbersome syntax of selecting elements on the DOM regularly and using JSX instead

2. Describe component state.

State is what it sounds like - the state of the data, or one piece of data, in an application or component. Using state in React means that React with track the data and re-render components that use that data as needed.

3. Describe props.

Props is the React equivilent of parameters. Instead of multiple parameters, React passes Props from one component down to a child component. Props is an object with key: value pairs storing what would normally be represented by individual arguments.

4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

Side effects are events that occur externally from the code itself, like a console.log, API request, etc. We can use the useEffect hook to define side effects and control when they happen. useEffect takes two arguments, a callback (the function that actually creates the side effect) and an optional second argument that is an array of components/elements. useEffect will look only for changes on these specific elements to determine if it runs. useEffect will always run on the mounting of the component it's contained within.