
/**
 * Data structure returned from the Halo 5 "playerGameVariant" query.
 */
export interface PlayerGameVariant {
    /** Internal use only. This will always be 1. */
    BaseGameEngineType: number,

    /** Internal use only. This will always be 1. */
    GameType: number,

    /** The base game variant on which this variant is created. */
    BaseGame: {

        /** The resource type. 8 indicates base game variant. */
        ResourceType: number,

        /** The ID of the base game variant. */
        ResourceId: string,

        /** The source of the base game variant. will always be 3 (Official) for the BaseGame. */
        OwnerType: number,

        // The gamertag of the user that created the base game variant if this is a
        // user-generated game variant, or null otherwise.
        Owner: string
    },

    // The minimum score necessary for a player to win the match. A value of 0 indicates
    // the base game variant's default value is used.
    ScoreToWin: number,

    // The number of lives allowed. A value of 0 indicates the base game variant's default
    // value is used.
    NumberOfLives: number,

    // Maximum runtime of the match in seconds. A value of 0 indicates the base game
    // variant's default value is used.
    MatchDurationInSeconds: number,

    // The number of rounds in the match. A value of 0 indicates the base game variant's
    // default value is used.
    NumberOfRounds: number,

    // The name of the game variant.
    Name: string,

    // The description of the game variant.
    Description: string,

    // Indicates the restrictions for access that apply to the game variant. possible
    // values are:
    //   Listed (game variant will show up in search results) = 0,
    //   Unlisted (game variant won't show up in search results) = 1,
    //   Unknown = 2.
    AccessControl: number,

    // Internal use only.
    Links: string,

    // The date that the game variant was created. The time component of this date is
    // always set to 00:00:00. This is expressed as an ISO 8601 combined Date and Time.
    CreationTimeUtc: {

        ISO8601Date: string
    },

    // The date that the game variant was last modified. The time component of this date is
    // always set to 00:00:00. This is expressed as an ISO 8601 combined Date and Time.
    LastModifiedTimeUtc: {

        ISO8601Date: string
    },

    // A flag indicating whether this file has been banned or not.
    Banned: boolean,

    // The identity of the game variant.
    Identity: {

        // The resource type. 2 inidicates game variant.
        ResourceType: 2,

        // The ID of the game varaint.
        ResourceId: string,

        // The source of the game variant. will always be 1 (user generated).
        OwnerType: 1,

        // The gamertag of the user that created the game variant.
        Owner: string
    },

    // The set of aggregate statistics associated with this game variant.
    Stats: {

        // The current number of active bookmarks on this game variant.
        BookmarkCount: number,

        // Internal use only. This will always be false.
        HasCallerBookmarked: false
    }
}

export interface PlayerGameVariants {
    Results: PlayerGameVariant[]
    Start: number
    Count: number
    ResultCount: number
    TotalCount: number
    Links: string
}

export interface PlayerMapVariant {
    // The base map on which this variant is created from.
    BaseMap: {

        // The resource type. 9 indicates base map.
        ResourceType: number,

        // The ID of the base map.
        ResourceId: string,

        // The source of the base map variant. will always be 3 (Official) for the BasMap.
        OwnerType: number,

        // The gamertag of the user that created the base game variant if this is a
        // user-generated game variant, or null otherwise.
        Owner: string
    },

    // The name of the map variant.
    Name: string,

    // The description of the map variant.
    Description: string,

    // Indicates the restrictions for access that apply to the game variant. possible
    // values are:
    //   Listed (game variant will show up in search results) = 0,
    //   Unlisted (game variant won't show up in search results) = 1,
    //   Unknown = 2.
    AccessControl: number,

    // Internal use only.
    Links: string,

    // The date that the map variant was created. The time component of this date is
    // always set to "00:00:00". This is expressed as an ISO 8601 combined Date and
    // Time.
    CreationTimeUtc: {

        ISO8601Date: string
    },

    // The date that the map variant was last modified. The time component of this date
    // is always set to "00:00:00". This is expressed as an ISO 8601 combined Date and
    // Time.
    LastModifiedTimeUtc: {

        ISO8601Date: string
    },

    // A flag indicating whether this file has been banned or not.
    Banned: boolean,

    // The identity of the map variant.
    Identity: {

        // The resource type. 3 inidicates map variant.
        ResourceType: number,

        // The ID of the map varaint.
        ResourceId: string,

        // The source of the map variant. will always be 1 (user generated).
        OwnerType: number,

        // The gamertag of the user that created the game variant.
        Owner: string
    },

    // The set of aggregate statistics associated with this map variant.
    Stats: {

        // The current number of active bookmarks on this map variant.
        BookmarkCount: number,

        // Internal use only. This will always be false.
        HasCallerBookmarked: boolean
    }


}

export interface PlayerMapVariants {
    Results: PlayerMapVariant[]
    Start: number
    Count: number
    ResultCount: number
    TotalCount: number
    Links: string
}
