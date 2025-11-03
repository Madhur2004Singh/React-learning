function customRender(ReactElement,container){
    // Basic Implementation
    /* const domElement=document.createElement(ReactElement.type);
    domElement.innerHTML=ReactElement.children;
    domElement.setAttribute('href',ReactElement.props.href);
    domElement.setAttribute('target',ReactElement.props.target);
    container.appendChild(domElement);  */

    const domElement=document.createElement(ReactElement.type);
    domElement.innerHTML=ReactElement.children;
    for (const prop in ReactElement.props) {// For in loop is generally used when we want to iterate over the keys in a dataq structure/object.

        if(prop==='children') continue;
        domElement.setAttribute(prop,ReactElement.props[prop]);
    }
    container.appendChild(domElement);
}


const ReactElement={ 
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer=document.getElementById('root');

customRender(ReactElement,mainContainer);