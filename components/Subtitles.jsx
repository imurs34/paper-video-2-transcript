import { useAtom } from 'jotai';
import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { currentTimeAtom, darkModeAtom, mobileModeAtom, withFrameAtom } from '../atom';
import objeto from '../constants/colourBlock';
import { paragraph, sections } from '../constants/transcriptBlock';

const Subtitles = ({ subtitles }) => {
  const [currentTime] = useAtom(currentTimeAtom);
  const [focusedId, setFocusedId] = useState(null);
  const refs = useRef({});
  const findSub = (time) => subtitles.find((element) => element.start == time) || null;

  useEffect(() => {
    const sub = findSub(currentTime);
    if (sub) setFocusedId(sub.index);
  }, [currentTime]);

  useEffect(() => {
    if (focusedId) refs.current[focusedId].focus();
  }, [focusedId]);

  const topRef = refs.current[1]?.getBoundingClientRect().top;
  const bottomRef = refs.current[6]?.getBoundingClientRect().bottom;

  const { map1: map1Toggle, map2: map2Toggle } = useSelector((state) => state.toggle);

  return (
    <div className="flex flex-col w-full h-full z-40 overflow-y-auto">
      {subtitles?.map((sub, index) => {
        return (
          <div
            className={`flex flex-row relative  ${sub.index === focusedId ? 'bg-indigo-600' : ''}`}
            key={sub.index}
            ref={(ref) => {
              refs.current[sub.index] = ref;
            }}
            tabIndex={focusedId === sub.index ? 0 : -1}
          >
            <div className="w-[10%] flex items-center">
              <button className="p-1 flex items-center h-6 text-white text-sm bg-gray-500 rounded-full">
                {sub.start}
              </button>
              {/* Sessions */}
              {map1Toggle &&
                sections.map(
                  ({ initial, final, color }, index) =>
                    sub.index > initial &&
                    sub.index < final && (
                      <div className={`w-4 h-full mr-2`} style={{ background: color }} />
                    ),
                )}

              {/* Paragraphs */}
              {map2Toggle &&
                paragraph.map(
                  ({ initial, final, color }, index) =>
                    sub.index > initial &&
                    sub.index < final && (
                      <div className={`w-4 h-full mr-2`} style={{ background: color }} />
                    ),
                )}
            </div>
            <h1 className="w-[90%] py-3 text-white text-xl">{sub.text}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Subtitles;
