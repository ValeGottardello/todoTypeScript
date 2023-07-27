export const TODO_FILTERS = {
    ALL: 'all',
    ACTIVE: 'ACTIVE',
    COMPLETED: 'completed'
} as const
//no se puede cambiar poruqe es una propiedad de READ ONLy
export const FILTERS_BUTTONS = {
    [TODO_FILTERS.ALL] : {
     literal: 'all',
     href: `/?filter=${TODO_FILTERS.ALL}`
    },
    [TODO_FILTERS.ACTIVE] : {
     literal: 'actives',
     href: `/?filter=${TODO_FILTERS.ACTIVE}`
    },
    [TODO_FILTERS.COMPLETED] : {
     literal: 'completed',
     href: `/?filter=${TODO_FILTERS.COMPLETED}`
    }
 } as const

