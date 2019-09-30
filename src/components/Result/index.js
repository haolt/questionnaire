import React from 'react';

// export default class componentName extends Component {
//   render() {
//     const { handle } = this.props.match.params;
//     const { fromNotifications } = this.props.location.state;
//     console.log('1: ', fromNotifications);
//     console.log('2: ', fromNotifications);

//     return (
//       <div> textInComponent </div>
//     );
//   }
// }

const Result = (props) => {
  const {
    age,
    gender,
    meeting,
    message,
    name,
    relatedTags,
    relationshipRating,
    status
  } = props.location.state.dataFromForm;
  return (
    <>
      <h3>{ name }</h3>
      <p>
        <label>Age:</label>
        { age }
      </p>
      <p>
        <label>Gender:</label>
        { gender }
      </p>
      <p>
        <label>Status:</label>
        { status }
      </p>
      <p>
        <label>Relationship Rating:</label>
        { relationshipRating }
      </p>
      <p>
        <label>Meeting Schedule:</label>
        { meeting }
      </p>
      <p>
        <label>Related Tags:</label>
        { relatedTags.map(
          (tag) => <span key={tag}>{tag}</span>,
        ) }
      </p>
      <p>
        <label>Message:</label>
        { message }
      </p>
    </>
  );
} 

export default Result;