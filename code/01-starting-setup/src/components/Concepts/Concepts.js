import Concept from './Concept';

function Concepts(props) {
  const boxes = [];

  for (let i = 0; i < props.concepts.length; i++) {
    boxes.push(
      <Concept
        title={props.concepts[i].title}
        image={props.concepts[i].image}
        description={props.concepts[i].description}
      />
    );
  }

  return <ul id="concepts">{boxes}</ul>;
}

export default Concepts;
