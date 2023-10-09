
# Kairou 回廊

A simple image gallery with very simple authentication and DnD(drag and drop) functionality. It's also got a little something I like to call "drag lock" -- basically reserving the drag and drop functionality to authenticated users.

Live site: [kairou.vercel.app](https://kairou.vercel.app/) -- Looks the best on large screen widths😁


## Screenshots

![screenshot](https://github.com/pi-xlz/hng-int-tasks/assets/104459898/99e37d58-bd7d-4b5e-96c1-9b42eec25d33)




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

  ![search](https://github.com/pi-xlz/hng-int-tasks/assets/104459898/5a299f29-d662-41dd-a61b-b1830c8faf51)




### Drag-Lock🔥:
Drag and Drop while not signed in to see results.

   ![drag-lock](https://github.com/pi-xlz/hng-int-tasks/assets/104459898/69e9d110-0358-4cd2-90a7-77423a6ff8b3)



### Login:
```
LOGIN CREDENTIALS

Email: 'user@example.com'
Password: '1Password'
```

 ![auth](https://github.com/pi-xlz/hng-int-tasks/assets/104459898/42a58c0a-6ce9-460b-8aa7-22026e04057e)




## Missing Features/Updates💔

Things might be a bit buggy(touching images triggers "drag-lock" -- A pesky bug, but it's coming from the dnd lib) but not obtrusive, on mobile.

There is currently a bug where the search functionality doesn't work on physical mobile phones for some reason. It works fine when you resize the browser to mobile width on your desktop browser.

Currently looking into it...


## Authors

- [@pi-xlz](https://www.github.com/pi-xlz) -- DND(design and dev)


