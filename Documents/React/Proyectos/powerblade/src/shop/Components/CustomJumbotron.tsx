import React from 'react'

interface Props {
    title: string;
    subTitle?: string;
}

export const CustomJumbotron = ({title,subTitle}:Props) => {
  
  const defaultSubTitle='Los mejores productos aquí!'
    return (
         <section className="py-10 px-4 lg:px-8 bg-muted/30">
        <div className="container mx-auto text-center">
          <h1 className="text-2xl lg:text-4xl tracking-tight mb-6 capitalize">
            {title}
          </h1>
          <p className="text-md text-muted-foreground mb-8 max-w-2xl mx-auto">
            {subTitle || defaultSubTitle}
            </p>
        </div>
      </section>
  )
}
