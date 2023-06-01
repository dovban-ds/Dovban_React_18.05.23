export default function Validation({ state, validArr }) {
  const check = /^[^0-9]{2,}$/;
  const result = [];

  if (state.firstName) {
    if (state.firstName[0].match(check)) {
      result.push(<li key={`1`}>&#10003; Firstname gap filled properly</li>);
    } else if (state.firstName[0].length !== 0) {
      result.push(
        <li key={"2"}>&#10060; Firstname field passed incorrectly</li>
      );
    }
  }

  if (state.lastName) {
    if (state.lastName[0].match(check)) {
      result.push(<li key={"3"}>&#10003; LastName gap filled properly</li>);
    } else if (state.lastName[0].length !== 0) {
      result.push(
        <li key={"4"}>&#10060; LastName field passed incorrectly</li>
      );
    }
  }

  if (state.email) {
    if (
      state.email[0].match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      result.push(<li key={"5"}>&#10003; Email gap filled properly</li>);
    } else if (state.email[0].length !== 0) {
      result.push(<li key={"6"}>&#10060; Invalid email</li>);
    }
  }

  if (state.password) {
    if (state.password[0].match(/^(?=.*[A-Z])(?=.*\d).{6,10}$/)) {
      result.push(<li key={"7"}>&#10003; Password gap filled properly</li>);
    } else if (state.password[0].length !== 0) {
      result.push(<li key={"8"}>&#10060; Invalid password</li>);
    }
  }
  validArr(result);
  return <ul>{result}</ul>;
}
