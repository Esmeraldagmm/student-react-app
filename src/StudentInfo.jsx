// export to make it public to other files 

export function StudentInfo(props) {
  return (
    <div>
      <div>{props.lastName},{props.firstName}</div>
      <ul>
        <li>
          <strong>ID:</strong> {props.sID}
        </li>
        <li>
          <strong>School:</strong> {props.school}
        </li>
        <li>
          <strong>Major:</strong> {props.major}
        </li>
      </ul>
    </div>
  );
}


// one component per file 

// props increase the reusability of a component 
// you can destruct the prop and include it as a parameter or include it like the example above 