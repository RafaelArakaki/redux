export type UserPayload = {
	name: string,
	age: number | null,
	gender: string,
	height: number | null,
	weight: number | null,
	nationality: string,
}

export type reducerUserPayload = {
  userProfile: UserPayload
}

export type ReducerUserPayload = {
	user: reducerUserPayload,
	_persist: PersistPartial;
}