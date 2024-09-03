import { useState, useEffect, useCallback } from "react";

export const useBlubs = (env) => {
  const [blubs, setBlubs] = useState({});
  const [blubFromId, setBlubFromId] = useState({});

  const createBlub = useCallback(
    (options, local = false) => {
      const {
        description = env.error("options missing description"),
        id = env.error("options missing id"),
        position = env.error("options missing position"),
        time = env.error("options missing time"),
        title = env.error("options missing title"),
        user = env.error("options missing user"),
      } = options;

      if (blubFromId[id]) {
        const existingBlub = blubFromId[id];
        existingBlub.adjust(options);
        return existingBlub;
      }

      const blub = {
        adjust: (newOptions) => {
          // Implement adjust logic here
        },
        getDescription: () => description,
        getId: () => id,
        getPosition: () => position,
        getTime: () => time,
        getTitle: () => title,
        user,
        type: "blub",
      };

      if (!local) {
        env.network.send("blub", blub);
      }

      setBlubFromId((prev) => ({ ...prev, [id]: blub }));
      return blub;
    },
    [blubFromId, env]
  );

  const easyCreate = useCallback(
    (title, description) => {
      return createBlub({
        description,
        id: env.get_random(),
        position: env.get_position(),
        time: env.get_time(),
        title,
        user: env.user,
      });
    },
    [createBlub, env]
  );

  const fetchBlubsByPosition = useCallback(
    (position) => {
      return env.network.fetch("blubs_by_position", position);
    },
    [env]
  );

  useEffect(() => {
    env.serializer.set_encoder("blub", (blub) => ({
      description: blub.getDescription(),
      id: blub.getId(),
      position: blub.getPosition(),
      time: blub.getTime(),
      title: blub.getTitle(),
      user: blub.user,
      type: "blub",
    }));

    env.serializer.set_decoder("blub", (data) => createBlub(data));
  }, [createBlub, env]);

  return {
    blubs,
    createBlub,
    easyCreate,
    fetchBlubsByPosition,
  };
};
