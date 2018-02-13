/* tslint:disable */

export interface Query {
  people?: Person[] | null; 
  person?: Person | null; 
  planets?: Planet[] | null; 
  planet?: Planet | null; 
}

export interface Person {
  name?: string | null; 
  height?: string | null; 
  mass?: string | null; 
  hair_color?: string | null; 
  skin_color?: string | null; 
  eye_color?: string | null; 
  birth_year?: string | null; 
  gender?: string | null; 
  homeworld?: Planet | null; 
}

export interface Planet {
  name?: string | null; 
  rotation_period?: string | null; 
  orbital_period?: string | null; 
  diameter?: string | null; 
  climate?: string | null; 
  gravity?: string | null; 
  terrain?: string | null; 
  surface_water?: string | null; 
  population?: string | null; 
  residents?: Person[] | null; 
}
export interface PersonQueryArgs {
  id: number; 
}
export interface PlanetQueryArgs {
  id: number; 
}
