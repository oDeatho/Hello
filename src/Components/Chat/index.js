import React from 'react';
import PropTypes from 'prop-types';


import ButtonAppBar from "./Top"
import PersistentDrawerLeft from "./Leftlist"
import ContainerFunction from "./ContainerFun"


class Chat extends React.Component {
    render(){
        return (
            <div>
                <PersistentDrawerLeft></PersistentDrawerLeft>
                <ButtonAppBar name="hello"></ButtonAppBar>
                <ContainerFunction></ContainerFunction>
            </div>
        );
    }
}

Chat.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default Chat;