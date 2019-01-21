import React, { Component } from 'react';
//import ReactGA from 'react-ga';
import classNames from 'classnames';
import BookGenreTag from "./BookGenreTag";
import Label from "../_ui/Label/Label";
import './BookRow.css';

class BookRow extends Component {
    state = {
        bookIsClicked: false,
        bookColor: [],
    }

    openBook = () => {
        this.setState(prevState => ({
            bookIsClicked: !prevState.bookIsClicked
        }));

    }

    render() {
        const { audiobook, author, categories, coverImg, genres, inProgress, summary, tags, title } = this.props;
        const { bookIsClicked } = this.state;

        return (
            <div className={classNames("BookRow__container", {'BookRow__container--expanded' : bookIsClicked})} onClick={this.openBook}>
                <div className="BookRow">
                    <div className="BookRow__title">
                        <span className="BookRow__title__span">
                            {title}
                        </span>
                        {audiobook && (
                            <i className="BookRow__icon BookRow__title__icon BookRow__icon--audiobook fas fa-headphones-alt"></i>
                        )}
                    </div>
                    <div className="BookRow__author">
                        {author}
                    </div>
                    <div className="BookRowGenreTags__container">
                        {Object.keys(tags).map((key) =>
                            <BookGenreTag
                                categories={categories}
                                genres={genres}
                                tag={tags[key]}
                                key={key}/>
                        )}
                    </div>
                    <div className="BookRow__status">
                        {inProgress && (
                            <i className="BookRow__icon BookRow__icon--progress fas fa-spinner"></i>
                        )}
                    </div>
                </div>
                <div className={classNames("BookRowSummary__container", { 'BookRowSummary__container--expanded': bookIsClicked })} onClick={this.openBook}>
                    <div className="BookRowSummaryGrid">
                        <div className="BookRowSummary">
                            <img className="BookRowSummary__image"
                                src={coverImg} alt={'"' + title + '"' + " book cover"} />
                            <div className="BookRowSummary__summary">
                                <Label>
                                    Summary
                                </Label>
                                <div>
                                    {summary}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default BookRow;


// import React, { Component } from 'react';
// import ReactGA from 'react-ga';
// import classNames from 'classnames';
// import BookGenreTag from "./BookGenreTag";
// //import Label from "../_ui/Label/Label";
// import './BookRow.css';

// class BookRow extends Component {
//     state = {
//         bookIsClicked: false,
//         bookColor: [],
//     }

//     openBook = () => {
//         this.setState(prevState => ({
//             bookIsClicked: !prevState.bookIsClicked
//         }));

//     }

//     render() {
//         const { audiobook, author, categories, genres, inProgress, tags, title } = this.props;
//         const { bookIsClicked } = this.state;

//         return (
//             <div className={classNames("BookRow__container", { 'BookRow__container--expanded': bookIsClicked })} onClick={this.openBook}>
//                 <div className="BookRow">
//                     {/* <img className="BookRow__image" src="https://images.gr-assets.com/books/1438825353l/6033525.jpg" alt="" /> */}
//                     {/* <div className="BookRow__image"></div> */}

//                     <div className="BookRowMetas">
//                         {/* <i className="BookRow__icon BookRow__icon--book fas fa-book"></i> */}
//                         <span className="BookRow__title">
//                             {title}
//                         </span>
//                         <span className="BookRow__author">
//                             by {author}
//                         </span>
//                         {/* {(bookIsClicked && summary) && (
//                             <div className="BookRow__summary__container">
//                                 <Label className="BookRow__summary__label">
//                                     Summary
//                                 </Label>
//                                 <div className="BookRow__summary">
//                                     <div>
//                                         {summary}
//                                     </div>
//                                 </div>
//                             </div>
//                         )} */}
//                     </div>
//                     <div className="BookRowGenreTags__container">
//                         {Object.keys(tags).map((key) =>
//                             <BookGenreTag
//                                 categories={categories}
//                                 genres={genres}
//                                 tag={tags[key]}
//                                 key={key}>
//                             </BookGenreTag>
//                         )}
//                     </div>
//                     <div className="BookRow__icons">
//                         <div className="BookRow__icon__container">
//                             {inProgress && (
//                                 <i className="BookRow__icon BookRow__icon--progress fas fa-spinner"></i>
//                             )}
//                         </div>
//                         <div className="BookRow__icon__container">
//                             {audiobook && (
//                                 <i className="BookRow__icon BookRow__icon--audiobook fas fa-headphones-alt"></i>
//                             )}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         );
//     }
// }

// export default BookRow;
