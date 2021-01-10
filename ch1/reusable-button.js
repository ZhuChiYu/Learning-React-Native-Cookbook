import React, {Component} from 'react'
import {
    Text,
    TouchableOpacity
} from 'react-native';
import {
    Base,
    Default,
    Danger,
    Info,
    Success
} from '../ch1/styles'

export default class Button extends Component {
    getTheme() {
        const { danger, info, success }=this.properties
        if(info) {
            return Info
        }

        if(success) {
            return Success
        }

        if(danger) {
            return Danger
        }

        return Default;
    }

    render() {
        const theme = this.getTheme();
        const {
            children,
            onPress,
            style,
            rounded
        } = this.properties;

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={[
                    Base.main,
                    theme.main,
                ]}
            >

            </TouchableOpacity>
        )
    }
}