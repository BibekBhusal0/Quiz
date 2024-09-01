import { decode } from "html-entities";
import { Skeleton } from "@nextui-org/skeleton";
import { Options } from "./option";

export default function Question({
  i,
  question: { correct_answer, all_answers, question },
}) {
  correct_answer = decode(correct_answer);

  return (
    <div className="w-full px-2">
      <div className="text-xl md:text-3xl">
        {i}: {decode(question)}
      </div>
      <div>
        <Options all_options={all_answers} correct_answer={correct_answer} />
      </div>
    </div>
  );
}

export function QuestionSkeleton() {
  return (
    <div className="w-full px-2">
      <Skeleton className="w-10/12 h-14 rounded-s" />
      <div className="grid grid-cols-1 md:grid-cols-2 p-2">
        {[0, 1, 2, 3].map((i) => (
          <Skeleton
            key={i}
            className="w-10/12 h-12 mx-5 my-2 rounded-lg gap-3"
          />
        ))}
      </div>
    </div>
  );
}
