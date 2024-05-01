"use client";

import React, { FC } from "react";
import { AssistantProps } from "../../app/page";
import * as Avatar from "@radix-ui/react-avatar";
import {
  Thread,
  Message,
  Composer,
  ActionBar,
  BranchPicker,
} from "assistant-ui";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowUpIcon,
  ClipboardIcon,
  Pencil1Icon,
  ReloadIcon,
} from "@radix-ui/react-icons";
import { MessageEditableContent } from "assistant-ui/src/primitives/message/MessageEditableContent";

export const ChatGPT: FC<AssistantProps> = ({ chat }) => {
  return (
    <Thread.Root
      chat={chat}
      className="flex h-full flex-col items-stretch bg-[#212121] px-12 pb-4"
    >
      <Thread.Viewport className="flex flex-grow flex-col overflow-y-scroll pt-16">
        <Thread.Empty>
          <div className="flex flex-grow flex-col items-center justify-center">
            <Avatar.Root className="flex h-12 w-12 items-center justify-center rounded-[24px] bg-white">
              <Avatar.AvatarFallback>C</Avatar.AvatarFallback>
            </Avatar.Root>
            <p className="mt-4 text-xl text-white">How can I help you today?</p>
          </div>
        </Thread.Empty>

        <Thread.Messages components={{ Message: ChatMessage }} />
      </Thread.Viewport>

      <Composer.Root className="flex rounded-xl border border-white/15 p-0.5">
        <Composer.Input
          placeholder="Message ChatGPT..."
          className="h-12 flex-grow resize-none bg-transparent p-3.5 text-sm text-white outline-none placeholder:text-white/50"
        />
        <Composer.Send className="m-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white text-2xl font-bold disabled:opacity-10">
          <ArrowUpIcon
            width={20}
            height={20}
            className="[&_path]:stroke-black [&_path]:stroke-[0.5]"
          />
        </Composer.Send>
      </Composer.Root>
      <p className="p-2 text-center text-xs text-[#cdcdcd]">
        ChatGPT can make mistakes. Consider checking important information.
      </p>
    </Thread.Root>
  );
};

const ChatMessage: FC = () => {
  return (
    <Message.Root className="mb-12 flex gap-3">
      <Avatar.Root className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-[24px] bg-white">
        <Avatar.AvatarFallback className="text-xs">
          <Message.UserOnly>Y</Message.UserOnly>
          <Message.AssistantOnly>C</Message.AssistantOnly>
        </Avatar.AvatarFallback>
      </Avatar.Root>

      <div className="flex-grow">
        <p className="font-semibold text-white">
          <Message.UserOnly>You</Message.UserOnly>
          <Message.AssistantOnly>ChatGPT</Message.AssistantOnly>
        </p>

        <Message.NotEditing>
          <p className="text-[#eee]">
            <Message.PlaintextContent />
          </p>
        </Message.NotEditing>

        <Message.Editing>
          <MessageEditableContent className="mb-2 flex h-8 w-full bg-transparent text-white outline-none" />
        </Message.Editing>

        <Message.NotEditing>
          <ActionBar.Root className="mt-2 flex items-center gap-3">
            <BranchPicker.Root className="inline-flex text-xs text-[#b4b4b4]">
              <BranchPicker.Previous className="disabled:opacity-50">
                <ChevronLeftIcon />
              </BranchPicker.Previous>
              <BranchPicker.Number /> / <BranchPicker.Count />
              <BranchPicker.Next className="disabled:opacity-50">
                <ChevronRightIcon />
              </BranchPicker.Next>
            </BranchPicker.Root>

            <Message.AssistantOnly>
              <ActionBar.Reload className="text-[#b4b4b4] hover:text-white">
                <ReloadIcon />
              </ActionBar.Reload>
              <ActionBar.Copy className="text-[#b4b4b4] hover:text-white">
                <ClipboardIcon />
              </ActionBar.Copy>
            </Message.AssistantOnly>

            <Message.UserOnly>
              <ActionBar.EditBegin className="text-[#b4b4b4] hover:text-white">
                <Pencil1Icon />
              </ActionBar.EditBegin>
            </Message.UserOnly>
          </ActionBar.Root>
        </Message.NotEditing>

        <Message.Editing>
          <ActionBar.Root className="mt-2 flex items-center justify-center gap-3">
            <ActionBar.EditConfirm className="rounded-lg bg-[#10a37e] px-3 py-2 text-sm text-white hover:bg-[#1a7f64]">
              Save & Submit
            </ActionBar.EditConfirm>

            <ActionBar.EditCancel className="rounded-lg border border-zinc-700 px-3 py-2 text-sm text-white hover:bg-zinc-800">
              Cancel
            </ActionBar.EditCancel>
          </ActionBar.Root>
        </Message.Editing>
      </div>
    </Message.Root>
  );
};
