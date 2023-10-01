
# Kairou 回廊

A simple image gallery with very simple authentication and DnD(drag and drop) functionality. It's also got a little something I like to call "drag lock" -- basically reserving the drag and drop functionality to authenticated users.

Live site: [kairou.vercel.app](https://kairou.vercel.app/) -- Looks the best on large screen widths😁


## Screenshots

![kairou](https://github.com/pi-xlz/hng_int_task/assets/104459898/3ac2677b-62bb-4ec0-8a49-de22545b3e7b)



## Features

- Simple user authentication🗝
- Search/Filter functionality🔍
- Fully Responsive design🖥💻📱
- Drag-Lock(restricting dnd functionality to authenticated users only).


## Tech Stack

**Frontend:** Next.js, TailwindCSS

**Auth:** Clerk


## Demo

### Search:
Enter your search query(i.e tag) and watch the magic.
Tags show on hover(on desktop).

  ![search](https://github.com/pi-xlz/hng_int_task/assets/104459898/a1caeb1e-0dda-43d2-ba91-52822b8748e1)



### Drag-Lock🔥:
Drag and Drop while not signed in to see results.

   ![drag-lock](https://github.com/pi-xlz/hng_int_task/assets/104459898/80678252-21d2-47bd-b51d-0574730eaa88)


### Login:
```
LOGIN CREDENTIALS

Email: 'user@example.com'
Password: '1Password'
```

  ![login](https://github.com/pi-xlz/hng_int_task/assets/104459898/72a61b22-9ffe-4d25-bd5f-8153b081ab6e)



## Missing Features/Updates💔

Things might be a bit buggy(touching images triggers "drag-lock" -- A pesky bug, but it's coming from the dnd lib) but not obtrusive, on mobile.

There is currently a bug where the search functionality doesn't work on physical mobile phones for some reason. It works fine when you resize the browser to mobile width on your desktop browser.

Currently looking into it...


## Authors

- [@pi-xlz](https://www.github.com/pi-xlz) -- DND(design and dev)


