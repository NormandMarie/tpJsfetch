class Task {
  constructor( name, description, make = false, id){
    this.name = name;
    this.description = description;
    this.make = make;
    this.id = id;
  }

}

export {Task}
