import React from "react";

class LiceCicle extends React.Component {
    constructor(props){
        super(props)
        console.log('');
    }

    componentWillUnmount(){
        // antes del montaje
    }

    componentDidMount() {
        // componente ya listo
    }

    render() {
        return (
           <LiceCicle {...this.state} />
        );
    }
}

export default LiceCicle;