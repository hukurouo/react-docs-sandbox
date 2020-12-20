import React from 'react';

type NameFormType = {
  userName: string
  favoriteFlavor: string
  list: string[]
}

function ListItem(props: any) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function NameList(props: any) {
  const items = props.items;
  const listItems = items.map((name: string) =>
    // Correct! Key should be specified inside the array.
    <ListItem key={name} value={name} />
  );
  return (
    <ul>
      {listItems}
    </ul>
  );
}

class NameForm extends React.Component<{}, NameFormType> {
  constructor(props:{}) {
    super(props);
    this.state = {
      userName: '',
      favoriteFlavor: 'grapefruit',
      list: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: any) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    var partialState: any = {};
    partialState[name] = value;
    this.setState(partialState);
  }

  handleSubmit(event: any) {
    this.setState({
      userName: '',
      list: this.state.list.concat([this.state.userName + ' likes ' + this.state.favoriteFlavor])
    })
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Name Form</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input name="userName" type="text" value={this.state.userName} onChange={this.handleChange} />
          </label>
          <br/>
          <label>
          Pick your favorite flavor:
          <select name="favoriteFlavor" value={this.state.favoriteFlavor} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </label>
        <br/>
          <input type="submit" value="Submit" />
        </form>
        <div>
          log:
          <NameList items={this.state.list} />
        </div>
      </div>
    );
  }
}

export default NameForm