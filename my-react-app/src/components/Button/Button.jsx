export default function Button(props) {
    return <button type={props.type} onClick={props.onClickHandler} > {props.text} </button>
}