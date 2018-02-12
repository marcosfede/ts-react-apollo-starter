/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface planetQuery {
  planet:  {
    __typename: "Planet",
    name: string | null,
    rotation_period: string | null,
    orbital_period: string | null,
    diameter: string | null,
    climate: string | null,
    gravity: string | null,
    terrain: string | null,
    surface_water: string | null,
    population: string | null,
    residents:  Array< {
      __typename: "Person",
      name: string | null,
    } | null > | null,
  } | null,
};
