/* tslint:disable */

export interface Query {
  people: Person[]; 
  person: Person; 
  planets: Planet[]; 
  planet: Planet; 
}

export interface Person {
  name: string; 
  height: string; 
  mass: string; 
  hair_color: string; 
  skin_color: string; 
  eye_color: string; 
  birth_year: string; 
  gender: string; 
  homeworld: Planet; 
}

export interface Planet {
  name: string; 
  rotation_period: string; 
  orbital_period: string; 
  diameter: string; 
  climate: string; 
  gravity: string; 
  terrain: string; 
  surface_water: string; 
  population: string; 
  residents: Person[]; 
}
export interface PersonQueryArgs {
  id: number; 
}
export interface PlanetQueryArgs {
  id: number; 
}
