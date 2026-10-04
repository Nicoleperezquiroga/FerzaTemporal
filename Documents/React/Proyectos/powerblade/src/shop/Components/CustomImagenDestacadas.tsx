import React from 'react'
import { imaganesDestacadas } from '@/mocks/imagenesDestacadas.mock'

export const CustomImagenDestacadas = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 lg:px-30 px-10">
            <img
                src={imaganesDestacadas[0].image}
                alt={imaganesDestacadas[0].name}
                className="rounded-xl"
            />
            <div className="grid grid-cols-1 gap-1">
                <div>
                    <img
                        src={imaganesDestacadas[1].image}
                        alt={imaganesDestacadas[1].name}
                        className="rounded-xl"
                    />
                </div>
                <div>
                    <img
                        src={imaganesDestacadas[2].image}
                        alt={imaganesDestacadas[2].name}
                        className="rounded-xl"
                    />
                </div>
            </div>
        </div>
    )
}
