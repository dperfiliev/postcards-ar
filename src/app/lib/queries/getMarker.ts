"use server"

import { notFound } from "next/navigation"
import fetchData from "./fetchData"

export default async function getMarker ({id}:{id: string}) {
    const query = `
        query Marker($documentId: ID!) {
        marker(documentId: $documentId) {
            model {
            url
            }
        }
        }
    `

    const json = await fetchData<markerPattT>({
        query,
        variables: {
            documentId: id
        }
    })

    return json.data.marker
}