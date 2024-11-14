"use server"

import { notFound } from "next/navigation"
import fetchData from "./fetchData"

export default async function getMarkers ({pageSize} : {pageSize: number}) {
    const query = `
        query Markers($pagination: PaginationArg) {
            markers(pagination: $pagination) {
                documentId
                markerPatt {
                url
                }
                model {
                url
                }
            }
            }
    `

    const json = await fetchData<markersArrayT>({
        query,
        variables: {
            pagination: {
                pageSize: pageSize
            }
        }
    })

    return json.data.markers
}