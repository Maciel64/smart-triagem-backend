
export const sex = ['MALE', 'FEMALE', 'OTHER'] as const

export type Sex = typeof sex[number]

export class Patient {
  id?: string;
  name?: string;
  age?: number;
  email?: string;
  sex?: Sex;
}
