'use client';

import { useState, useEffect } from 'react';
import Button from '@/components/UI/Button';
import ImageCard from '@/components/UI/ImageCard';
import SearchBar from '@/components/UI/SearchBar';
import Guide from '@/components/UI/Guide';
import { Gallarray } from '@/utils/data';
import { BtnState, ImgArray } from '@/utils/types';
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
  sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { useEffectOnce } from 'usehooks-ts';
import Link from 'next/link';
import { useUser, SignOutButton, SignedOut, SignedIn } from '@clerk/nextjs';
import toast, { Toaster } from 'react-hot-toast';

const HomePage = () => {
  const [gallaray, setGallaray] = useState<ImgArray>(Gallarray);
  const [isGuiding, setIsGuiding] = useState<boolean | undefined>();
  const { isSignedIn } = useUser();
  const [loginBtnState, setLoginBtnState] = useState<BtnState>('DORMANT');
  const [isSearching, setIsSearching] = useState(false);
  const [searchMatchIds, setSearchMatchIds] = useState<string[]>([]);

  const handleLogOut = () => {
    toast.success('Successfully logged out.', {
      position: 'bottom-center',
      className: 'font-bold font-Poppins',
    });
  };

  useEffectOnce(() => {
    setTimeout(() => {
      setIsGuiding(true);
    }, 2000);
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoginBtnState('DORMANT');
    }, 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, [loginBtnState]);

  const sensors = useSensors(
    useSensor(MouseSensor),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
        // distance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const onDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === over?.id) {
      return;
    }

    if (isSignedIn === false) {
      setLoginBtnState('ATTENTION');
      toast.error('This action is restricted to signed in users.', {
        id: 'signin-toast',
        duration: 1200,
        position: 'bottom-center',
        className: 'font-bold font-Poppins',
      });
      return;
    }

    setGallaray((prev) => {
      const oldIdx = prev.findIndex((item) => item.id === active.id);
      const newIdx = prev.findIndex((item) => item.id === over?.id);
      return arrayMove(gallaray, oldIdx, newIdx);
    });
  };

  return (
    <main className="h-[100svh] p-4">
      {/* TOAST NOTIES */}
      <Toaster />
      {/* USER GUIDE */}
      {isGuiding && <Guide setIsGuiding={setIsGuiding} />}
      {/* UTILITY BAR */}
      <div className="row-start-2 row-end-3 flex gap-2 mt-6 py-4 justify-between w-full bg-clr-background-100 z-10 max-w-[34.375rem] self-start justify-self-center md:p-4 md:row-span-full md:col-span-full md:rounded-[8px] md:mt-[3rem]">
        {/* SEARCH FILTER */}
        <SearchBar
          gallaray={gallaray}
          isSearching={isSearching}
          setIsSearching={setIsSearching}
          setGallaray={setGallaray}
          setSearchMatchIds={setSearchMatchIds}
          searchMatchIds={searchMatchIds}
        />
        {/* LOGIN/LOGOUT */}
        <SignedIn>
          <SignOutButton signOutCallback={handleLogOut}>
            <div>
              <Button type="LOGGEDIN" />
            </div>
          </SignOutButton>
        </SignedIn>
        <SignedOut>
          <Link href={'/login'}>
            <Button
              btnState={loginBtnState}
              type="LOGGEDOUT"
            />
          </Link>
        </SignedOut>
      </div>
      {/* IMAGE GALLERY */}
      <article className="grid gallery-grid gap-y-1">
        <DndContext
          collisionDetection={closestCenter}
          onDragEnd={(e) => onDragEnd(e)}
          sensors={sensors}
        >
          <SortableContext
            items={gallaray}
            strategy={verticalListSortingStrategy}
          >
            {gallaray.map((item) => (
              <ImageCard
                key={item.id}
                item={item}
                isSearching={isSearching}
                searchMatchIds={searchMatchIds}
              />
            ))}
          </SortableContext>
        </DndContext>
      </article>
    </main>
  );
};

export default HomePage;
