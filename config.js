var config = {
    style: 'mapbox://styles/timateus/ckaomjqb205gd1jl2karjlm4v',
    accessToken: 'pk.eyJ1IjoidGltYXRldXMiLCJhIjoiY2s2ZmhwMzd2MGNsbjNsbHJjeW9jeTZjeiJ9.nz7s6DdDjUYWUFSpVjFYaw',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'Abandonded Cities of the Kola Peninsula',
    subtitle: 'What happens when the value leaves but the object remains?',
    byline: '',
    footer: 'The Terraforming 2020',
    chapters: [
        {
            id: 'russia-id',
            title: 'Russia as site condition',
            // image: './path/to/image/source.png',
            description: 'Where it all begain.',
            location: {
                center: [100.78170, 63.30270],
                zoom: 2.69,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'slug-style-id',
            title: 'Kola Peninsula',
            // image: './path/to/image/source.png',
            description: 'The Russian Arctic.',
            location: {
                center: [31.6068599, 67.9150264],
                zoom: 5,
                pitch: 60,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'teriberka-id',
            title: 'Teriberka',
            // image: './path/to/image/source.png',
            description: 'The 2014 Russian drama movie Leviathan, which won a Golden Globe in 2015, was filmed in Teriberka.',
            location: {
                center: [35.166667, 69.166667],
                zoom: 13,
                pitch: 60,
                bearing: -43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'kirovsk-id',
            title: 'Kirovsk',
            // image: './path/to/image/source.png',
            description: 'Where it could have begun.',
            location: {
                center: [33.65, 67.616667],
                zoom: 13,
                pitch: 60,
                bearing: 43.2
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
