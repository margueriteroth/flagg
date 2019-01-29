import React, { Component } from 'react';
import Button from "../_ui/Button/Button";
import Label from "../_ui/Label/Label";

class ComponentsPage extends Component {

    render() {
        return (
            <div className="ComponentsPage">
                <div className="ComponentsSection">
                    <Button>

                    </Button>
                </div>
                <div className="ComponentsSection">
                    <Label category="primary">

                    </Label>
                    <Label>

                    </Label>
                </div>
            </div>
        );
    }
}

export default ComponentsPage;
