import axios from "axios";
import * as React from "react";
import { JobProps } from "../@types";
import { axiosClient } from "../services/api";

interface DataFetcherProps {
  data: Array<JobProps> | [];
  hasNext: boolean;
  loading: boolean;
  error: any;
  pageSize: number;
  index: number;
}

const initialState: DataFetcherProps = {
  data: [],
  loading: false,
  error: false,
  hasNext: false,
  pageSize: 10,
  index: 1,
};

interface ReducerProps {
  type: string;
  [actions: string]: any;
}

const actions = {
  loadStart: "load",
  loadMore: "load more",
  loadCompleted: "load completed",
  loadFail: "load fail",
  changePageSize: "page size",
};

function jobListReducer(state: DataFetcherProps, action: ReducerProps) {
  switch (action.type) {
    case actions.loadStart: {
      return { ...state, loading: true };
    }
    case actions.loadMore: {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data.items],
        hasNext: action.data.hasNext,
        index: action.data.pageNumber,
      };
    }
    case actions.loadFail: {
      return { ...state, loading: false, error: action.message };
    }
    case actions.loadCompleted: {
      return {
        ...state,
        loading: false,
        data: action.data.items,
        hasNext: action.data.hasNext,
        index: action.data.pageNumber,
      };
    }
    case actions.changePageSize: {
      return { ...state, loading: false, pageSize: action.message, index: 1 };
    }
    default:
      throw new Error("This action doesn't exist");
  }
}

export function useFetchJobs() {
  const [state, dispatch] = React.useReducer(jobListReducer, initialState);

  const fetchFirstJobs = React.useCallback(
    async () => await getJobPost(dispatch),
    []
  );
  React.useEffect(() => {
    fetchFirstJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.data.length]);

  return { state, dispatch };
}

//Using Inversion of control to uptade the state
async function getJobPost(dispatcher: (params: ReducerProps) => void) {
  dispatcher({ type: actions.loadStart });
  try {
    const { data } = await axiosClient.get("job");
    if (data.success) {
      const { items, hasNext, pageNumber } = data.result;
      return dispatcher({
        type: actions.loadCompleted,
        data: { items, hasNext, pageNumber },
      });
    }
  } catch (err) {
    dispatcher({ type: actions.loadFail, message: err });
    throw new Error(String(err));
  }
}

export async function getMoreJobPost(
  dispatcher: (params: any) => any,
  index: number,
  pageSize: number
) {
  dispatcher({ type: actions.loadStart });

  try {
    const { data } = await axiosClient.get(
      `job/skip=${index}maxResult=${pageSize}`
    );
    if (data.success) {
      const { items, hasNext } = data.result;
      return dispatcher({
        type: actions.loadCompleted,
        data: { items, hasNext },
      });
    }
  } catch (err) {
    dispatcher({ type: actions.loadFail, message: err });
    throw new Error(String(err));
  }
}
