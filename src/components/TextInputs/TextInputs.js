import './TextInput.css';

export const TextInput = (props) => {
    return (
      <div className="text-input">
        <label>{props.label}</label>
        <input placeholder={props.placeholder} />
      </div>
    );
  };
  