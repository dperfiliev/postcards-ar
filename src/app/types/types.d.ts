//Models

interface iconT {
    url: string;
}

interface markerT {
    url: string
}

interface modelT {
    url: string
}

interface postcardT {
    data: {
        postcard: {
            documentId: string,
            name: string,
            marker: markerT,
            model: modelT
        }
    }
}


interface postcardsArrayT {
    data: {
        postcards: [{
            documentId: string,
            name: string,
            icon: iconT,
            marker: markerT,
            model: modelT
        }]
    }
}

//Markers

interface markerPattT {
    data: {
        marker: {
            model: modelT
        }
    }
}

interface markersArrayT {
    data: {
        markers: [{
            documentId: string,
            markerPatt: {
                url: string
            },
            model: {
                url: string
            }
        }]
    }
}