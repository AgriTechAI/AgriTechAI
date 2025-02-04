"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { megaMenuData } from "@/const/navbar"


export function Menu({ className }: { className?: string }) {
  return (
    <NavigationMenu 
    className={cn("bg-transparent",className)}>
      <NavigationMenuList className="space-x-4" >
        {
        megaMenuData.map((item,i) => {
          return(
            <NavigationMenuItem key={i} >
              <NavigationMenuTrigger>
                {item.Title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grod-cols-2 lg:w-[600px]">
                  {
                    item.services.map((component)=>(
                      <ListItem key={component.title} title={component.title} href={`/services${component.slug}`}>
                        {component.description}
                      </ListItem>
                    ))
                  }
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          )
        })
      }
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"




