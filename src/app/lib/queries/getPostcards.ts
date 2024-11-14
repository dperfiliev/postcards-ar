"use server"

import { notFound } from "next/navigation"
import fetchData from "./fetchData"

export default async function getPostcards ({pageSize} : {pageSize: number}) {
    const query = `
        query Postcards($pagination: PaginationArg) {
            postcards(pagination: $pagination) {
            documentId
            name
            icon {
                url
            }
            }
            }
    `

    const json = await fetchData<postcardsArrayT>({
        query,
        variables: {
            pagination: {
                pageSize: pageSize
            }
        }
    })

    return json.data.postcards
}