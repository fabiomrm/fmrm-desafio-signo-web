import { Router } from "express";
import { CreateOptionController } from "./modules/option/createOption/CreateOptionController";
import { DeleteOptionController } from "./modules/option/deleteOption/DeleteOptionController";
import { UpdateVoteInOptionController } from "./modules/option/updateVoteInOption/UpdateVoteInOptionController";
import { CreatePollController } from "./modules/poll/createPoll/CreatePollController";
import { DeletePollController } from "./modules/poll/deletePoll/DeletePollController";
import { GetFinishedPollsController } from "./modules/poll/getFinishedPolls/GetFinishedPollsController";
import { GetOngoingPollsController } from "./modules/poll/getOngoingPolls/GetOngoingPollsController";
import { GetPollController } from "./modules/poll/getPoll/GetPollController";
import { GetPollsController } from "./modules/poll/getPolls/GetPollsController";
import { GetUpcomingPollsController } from "./modules/poll/getUpcomingPolls/GetUpcomingPollsController";
import { UpdatePollController } from "./modules/poll/updatePoll/UpdatePollController";

export const routes = Router();

const createPollController = new CreatePollController();
const getPollsController = new GetPollsController();
const getPollController = new GetPollController();
const getFinishedPollsController = new GetFinishedPollsController();
const getOngoingPollsController = new GetOngoingPollsController();
const getUpComingPollsController = new GetUpcomingPollsController();
const deletePollController = new DeletePollController();
const updatePollController = new UpdatePollController();

const createOptionController = new CreateOptionController();
const deleteOptionController = new DeleteOptionController();
const updateVoteInOptionController = new UpdateVoteInOptionController();

routes.post("/polls", createPollController.handle);
routes.get("/polls", getPollsController.handle);
routes.get("/polls/ongoing", getOngoingPollsController.handle);
routes.get("/polls/finished", getFinishedPollsController.handle);
routes.get("/polls/upcoming", getUpComingPollsController.handle);
routes.get("/polls/:id", getPollController.handle);
routes.delete("/polls/:id", deletePollController.handle);
routes.put("/polls/:id", updatePollController.handle);

routes.post("/options", createOptionController.handle);
routes.delete("/options/:id", deleteOptionController.handle);
routes.put("/options", updateVoteInOptionController.handle);