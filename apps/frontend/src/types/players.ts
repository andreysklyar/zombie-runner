export interface NewPlayer {
    name: string
    score: number
}

export interface Player {
    name: string
    score: number
    id: string
}

export interface TopPlayersState {
    players: Player[]
    loading: boolean
    error: string | null
}

export interface TopPlayers {
    items: Player[]
    meta: {
        totalItems: number,
        itemCount: number,
        itemsPerPage: number,
        totalPages: number,
        currentPage: number
    }
}

export interface CreatePlayerState {
    player: Player
    loading: boolean
    error: string | null
}
