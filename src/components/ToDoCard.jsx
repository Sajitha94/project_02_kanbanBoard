import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useKanban } from "./LocalStorageDB";
function ToDoCard() {
  const {
    open,
    setOpen,
    handleClose,
    handleClickOpen,
    boards,
    setBoards,
    viewOnly,
    setViewOnly,
    setEditBoardId,
  } = useKanban();

  const ButtonOnclick = (btn, id) => {
    console.log("p");

    if (btn === "edit") {
      handleClickOpen(id);
    } else if (btn === "delete") {
      const deleteData = boards.filter((item) => item.id !== id);
      console.log(deleteData, "de");

      setBoards(deleteData);
    }
  };

  return (
    <Box
      sx={{
        display: "grid",
        gap: 3,
        marginTop: "30px",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
        },
        justifyItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          backgroundColor: "#f0f4f4",
          padding: "20px 30px",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            paddingBottom: "10px",
            color: "#00695c",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          To Do
        </Typography>
        {boards.map((card, idx) => {
          if (card.status === "todo") {
            return (
              <Card
                sx={{
                  width: 275,
                  height: "350px",
                  borderLeft: "5px solid #00796b",
                  borderRadius: "5px",
                }}
                key={idx}
              >
                <CardContent
                  sx={{
                    height: "240px",
                    overflowY: "auto",
                    pr: 1,
                    scrollbarWidth: "none",
                  }}
                >
                  <Typography
                    gutterBottom
                    sx={{
                      fontWeight: "bold",
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      color: "text.secondary",
                      mb: 1.5,
                    }}
                  >
                    {card.description}
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    <Chip
                      label={card.priority}
                      sx={{
                        backgroundColor: "#e0f2f1",
                        border: "1px solid #ccc",
                        color: "#424242",
                        fontWeight: "bold",
                        fontSize: "13px",
                        padding: "4px",
                      }}
                    />
                    {card.tags.map((item) => (
                      <Chip
                        label={item}
                        icon={<LocalOfferIcon sx={{ width: "13px" }} />}
                        sx={{
                          backgroundColor: "white",
                          border: "1px solid #ccc",
                          color: "#616161",
                          fontWeight: "bold",
                          fontSize: "11px",
                        }}
                      />
                    ))}
                  </Stack>
                </CardContent>

                <CardActions
                  className="flex flex-col gap-4 "
                  sx={{
                    padding: "8px  16px 10px 16px",
                    color: "#616161",
                    alignItems: "start",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "40px",
                      margin: 0,
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",
                      }}
                    >
                      <Typography sx={{ fontSize: "16px" }}>updated</Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        {card.date}{" "}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-around",
                        gap: "10px",
                      }}
                    >
                      <EditIcon
                        onClick={() => ButtonOnclick("edit", card.id)}
                      />
                      <DeleteIcon
                        onClick={() => ButtonOnclick("delete", card.id)}
                      />
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            );
          }
        })}
      </Box>

      {/*  */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          backgroundColor: "#f0f4f4",
          padding: "20px 30px",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            paddingBottom: "10px",
            color: "#00695c",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          To Do
        </Typography>
        <Card
          sx={{
            width: 275,
            height: "350px",
            borderLeft: "5px solid #00796b",
            borderRadius: "5px",
          }}
        >
          <CardContent
            sx={{
              height: "240px",
              overflowY: "auto",
              pr: 1,
              scrollbarWidth: "none",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              Sajitha
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                mb: 1.5,
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              aliquam voluptatem inventore magni perferendis sequi beatae
              debitis consectetur voluptas exercitationem quos, voluptate
              possimus blanditiis hic? Cumque labore illo omnis? Vitae?
            </Typography>
          </CardContent>

          <CardActions
            className="flex flex-col gap-4 "
            sx={{
              padding: "8px  16px 10px 16px",
              color: "#616161",
              alignItems: "start",
            }}
          >
            <Stack direction="row" spacing={1}>
              <Chip label="Low priorities" />
              <Chip
                label="abx"
                icon={<LocalOfferIcon sx={{ width: "15px" }} />}
              />
            </Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "40px",
                margin: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>updated</Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  1/9/2012, 1:22:40pm{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "10px",
                }}
              >
                <EditIcon />
                <DeleteIcon />
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "5px",
          backgroundColor: "#f0f4f4",
          padding: "20px 30px",
          borderRadius: "10px",
        }}
      >
        <Typography
          sx={{
            paddingBottom: "10px",
            color: "#00695c",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          To Do
        </Typography>
        <Card
          sx={{
            width: 275,
            height: "350px",
            borderLeft: "5px solid #00796b",
            borderRadius: "5px",
          }}
        >
          <CardContent
            sx={{
              height: "240px",
              overflowY: "auto",
              pr: 1,
              scrollbarWidth: "none",
            }}
          >
            <Typography
              gutterBottom
              sx={{
                fontWeight: "bold",
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              Sajitha
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                mb: 1.5,
              }}
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo
              aliquam voluptatem inventore magni perferendis sequi beatae
              debitis consectetur voluptas exercitationem quos, voluptate
              possimus blanditiis hic? Cumque labore illo omnis? Vitae?
            </Typography>
          </CardContent>

          <CardActions
            className="flex flex-col gap-4 "
            sx={{
              padding: "8px  16px 10px 16px",
              color: "#616161",
              alignItems: "start",
            }}
          >
            <Stack direction="row" spacing={1}>
              <Chip label="Low priorities" />
              <Chip
                label="abx"
                icon={<LocalOfferIcon sx={{ width: "15px" }} />}
              />
            </Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "40px",
                margin: 0,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "start",
                }}
              >
                <Typography sx={{ fontSize: "16px" }}>updated</Typography>
                <Typography sx={{ fontSize: "14px" }}>
                  1/9/2012, 1:22:40pm{" "}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-around",
                  gap: "10px",
                }}
              >
                <EditIcon />
                <DeleteIcon />
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}

export default ToDoCard;
