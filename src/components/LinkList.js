import React from 'react';
import ListItem from "./ListItem";
import { faHome, faPlane, faPizzaSlice } from '@fortawesome/free-solid-svg-icons'

class LinkList extends React.Component {

    addIcon(iconName){
        if (this.props.withIcons) {
            return iconName;
        }
        else {
            return '';
        }
    }

    addClassName(className){
        if (this.props.withClassNames) {
            return className;
        }
        else {
            return '';
        }
    }

    render() {
        return (
            <ul className={this.props.ulClassName}>
                <ListItem
                    className={this.addClassName('theme-1')}
                    innerText='Home'
                    link='/'
                    icon={this.addIcon(faHome)}
                />
                <ListItem
                    className={this.addClassName('theme-2')}
                    innerText='Travel'
                    link='/travel'
                    icon={this.addIcon(faPlane)}
                />
                <ListItem
                    className={this.addClassName('theme-3')}
                    innerText='Cooking'
                    link='/cooking'
                    icon={this.addIcon(faPizzaSlice)}
                />
            </ul>
        )
    }
}

export default LinkList;
