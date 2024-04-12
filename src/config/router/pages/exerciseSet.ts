export type ExerciseSetHistoryState = {
  /**
   * The topic id from which the user came to the exercise set.
   * Null if the user come to the page directly or from the common topics page.
   */
  fromTopicId: number | null;

  /**
   * True if the user came to the exercise set from the common topics page.
   * False if the user came to the exercise set from the specific topic.
   * Null if the user come to the page directly.
   */
  fromCommonTopics: boolean | null;
};
