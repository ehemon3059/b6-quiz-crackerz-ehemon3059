import './Blogs.css'
const Blogs = () => {


    return (
        <div>
            <h1 className='programmer-title'>Blogs for Programmer</h1>
            <div className="main-container">
                <div className="child-container">
                    <div className="heading">
                        <h2>What is react router purpose </h2>
                    </div>
                    
                    <div className="question-answer">
                            <p>React Router is a fully-featured client and server-side routing library for React, a JavaScript library for building user interfaces. React Router runs anywhere React runs; on the web, on the server with node.js, and on React Native.</p> <br/>
                            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.
                            Let us create a simple application to React to understand how the React Router works. The application will contain three components: home component, about a component, and contact component. We will use React Router to navigate between these components.</p>
                    </div>
                </div>
                <div className="child-container">
                    <div className="heading">
                        <h2>How to use context api in react </h2>
                    </div>
                    
                    <div className="question-answer">
                        <p>React context allows us to pass down and use (consume) data in whatever component we need in our React app without using props.
                        In other words, React context allows us to share data (state) across our components more easily.</p>
                        <br></br>
                        <b>Context is an API that is built into React, starting from React version 16.

                        This means that we can create and use context directly by importing React in any React project.</b> <br></br>
                        <b>There are four steps to using React context:</b>
                        <div className="list">
                            <ol>
                                <li>Create context using the createContext method.</li>
                                <li>Take your created context and wrap the context provider around your component tree.</li>
                                <li>Put any value you like on your context provider using the value prop.</li>
                                <li>Read that value within any component by using the context consumer.</li>
                            </ol>
                        </div>
                    </div>
                </div>
                <div className="child-container">
                    <div className="heading">
                        <h2> How to Work React <span style={{color: "green"}}>useRef</span> Hook</h2>
                    </div>
                    
                    <div className="question-answer">
                            <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
                            <b>A common use case is to access a child imperatively:</b>
                            <br></br>
                            
                            <p> 
                                
                            Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

                            You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object to React with  div ref=myRef , React will set its .current property to the corresponding DOM node whenever that node changes.

                            However, useRef is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.

                            This works because useRef creates a plain JavaScript object. The only difference between useRef and creating a current: ... object yourself is that useRef will give you the same ref object on every render.

                            Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current property doesn’t cause a re-render. If you want to run some code when React attaches or detaches a ref to a DOM node, you may want to use a callback ref instead.





                                 

                            </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;