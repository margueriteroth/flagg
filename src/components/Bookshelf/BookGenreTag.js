import React, { Component } from 'react';
import Label from "../_ui/Label/Label";

import './BookGenreTag.css';

class BookGenreTag extends Component {
    state = {
        tagColor: [],
    }

    setTagColor = () => {
        const { categories, genres, tag } = this.props;
        const categoriesAndGenres = categories.concat(genres);
        const tagObject = categoriesAndGenres.find(i => i.genre === tag);
        this.setState({ tagColor: tagObject.color });
    }

    componentDidMount() {
        this.setTagColor();
    }

    render() {
        const { tag } = this.props;
        const { tagColor } = this.state;
        return (
            <Label className="BookGenreTag" style={{background: tagColor}}>
                {tag}
            </Label>
        );
    }
}

export default BookGenreTag;