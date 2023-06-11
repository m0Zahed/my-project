import React from "react"

export const musicObject = {
    title: "Title goes here!",
    url: "Location of file in FileSystem",
    data: { vocals:"location of split audio 1",
            percussive: "location of split audio 2",
            bass: "location of split audio 3",
            harmonics: "location of split audio 4",
            other: "location of split audio 5"}
    }
``
export default function Detail(params)
{   
    
    return(
        <div class="text-center py-8">
            <div id="Title" class="text-3xl font-bold mb-4">
                {musicObject.title}
            </div>

            <div class="mb-8">
                Main Audio Goes Here
            </div>

            <div class="grid grid-cols-2 gap-4">
                <div id="1" class="p-4 bg-gray-200">
                <div class="text-lg font-bold mb-2">Split Audio #1</div>
                <div class="bg-white p-2">
                    Audio Player #1
                </div>
                </div>

                <div id="2" class="p-4 bg-gray-200">
                <div class="text-lg font-bold mb-2">Split Audio #2</div>
                <div class="bg-white p-2">
                    Audio Player #2
                </div>
                </div>

                <div id="3" class="p-4 bg-gray-200">
                <div class="text-lg font-bold mb-2">Split Audio #3</div>
                <div class="bg-white p-2">
                    Audio Player #3
                </div>
                </div>

                <div id="4" class="p-4 bg-gray-200">
                <div class="text-lg font-bold mb-2">Split Audio #4</div>
                <div class="bg-white p-2">
                    Audio Player #4
                </div>
                </div>

                <div id="5" class="p-4 bg-gray-200">
                <div class="text-lg font-bold mb-2">Split Audio #5</div>
                <div class="bg-white p-2">
                    Audio Player #5
                </div>
                </div>
            </div>
        </div>

    )
}