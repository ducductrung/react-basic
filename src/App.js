import React, { Component } from 'react';
import './App.css';
import './components/Card';
import Card from './components/Card';
const randomId = () => { return Math.floor(Math.random() * 100000); }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [
        {
          id: randomId(),
          name: 'Player 1',
          initiative: 25,
          hitpoint: 100
        },
        {
          id: randomId(),
          name: 'Player 2',
          initiative: 25,
          hitpoint: 100
        },
        {
          id: randomId(),
          name: 'Player 3',
          initiative: 25,
          hitpoint: 100
        },
        {
          id: randomId(),
          name: 'Player 4',
          initiative: 25,
          hitpoint: 100
        }
      ]
    };

    this.addCard = this.addCard.bind(this);
    this.removeCard = this.removeCard.bind(this);
    this.updateName = this.updateName.bind(this);
    this.updateInitiative = this.updateInitiative.bind(this);
    this.updateHitpoint = this.updateHitpoint.bind(this);
    this.sortElements = this.sortElements.bind(this);
  }

  addCard() {
    const { elements } = this.state;
    elements.push({
      id: randomId(),
      name: `Player ${elements.length + 1}`,
      initiative: -100,
      hitpoint: -100
    });
    this.setState({ elements });
  }

  removeCard(id) {
    let { elements } = this.state;
    elements = elements.filter(item => item.id!==id);
    this.setState({ elements });
  }

  updateName(id, e) {
    const { value } = e.target;
    const { elements } = this.state;
    elements.find(item => item.id === id).name = value;
    this.setState({ elements: elements });
  }

  updateInitiative(id, e) {
    const { value } = e.target;
    const { elements } = this.state;
    elements.find(item => item.id === id).initiative = value;
    this.setState({ elements });
  }

  updateHitpoint(id, e) {
    const { value } = e.target;
    const { elements } = this.state;
    elements.find(item => item.id === id).hitpoint = value;
    this.setState({ elements });
  }

  sortElements() {
    const { elements } = this.state;
    elements.sort((o1, o2) => o2.initiative - o1.initiative);
    this.setState({
      elements: elements
    })
  }

  render() {
    const { elements } = this.state;
    return (
      <div>
        <div>
          <button className='button' onClick={this.addCard}>Add</button>
        </div>
        {elements.map(element =>
          <div>
            <Card
              key={element.id}
              name={element.name}
              initiative={element.initiative}
              hitpoint={element.hitpoint}
              id={element.id}
              onNameChange={this.updateName}
              onInitiativeChange={this.updateInitiative}
              onEnter={this.sortElements}
              onHitpointChange={this.updateHitpoint}
              onRemove={this.removeCard}
            />
          </div>
        )
        }

      </div>
    );
  }
}

export default App;
