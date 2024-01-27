// Jsx => Extension of JavaScript

const title = 'React';
const welcome = {
    greeting: 'Welcome to ',
    title: 'React Practice Project'
}
const Jsx = () => {
    return (
        <div>
            <h1>Hello {title}</h1>
            <h1>{welcome.greeting} {welcome.title}</h1>
            <label htmlFor='search'>Search</label>
            <input type='text' id='search'/>
        </div>
    )
}
export default Jsx;