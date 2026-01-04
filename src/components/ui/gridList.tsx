import { Box, Card, CardActionArea, CardContent, Typography, Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface Category {
  id: string;
  name: string;
  image?: string;
  description?: string;
}

interface GridListProps {
  list: Category[];
  onDelete?: (id: string) => void;
  onEdit?: (id: string) => void;
}

export function GridList({ list, onDelete, onEdit }: GridListProps) {
  return (
    <Box mt={4}>
      <Grid container spacing={2}>
        {list.map((cat, i) => (
          <Grid
           
            key={cat.id || i}
          >
            <Card sx={{ position: "relative" }}>
              <CardActionArea>
                {cat.image && (
                  <img
                    src={cat.image}
                    alt={cat.name}
                    width={400}
                    height={250}
                    style={{ width: "100%", height: 200, objectFit: "cover" }}
                  />
                )}

                <CardContent>
                  <Typography variant="h6" fontWeight={600}>
                    {cat.name}
                  </Typography>

                  {cat.description && (
                    <Typography variant="body2" color="text.secondary">
                      {cat.description}
                    </Typography>
                  )}
                </CardContent>
              </CardActionArea>

              {/* Action buttons */}
              <Box
                sx={{
                  position: "absolute",
                  top: 8,
                  right: 8,
                  display: "flex",
                  gap: 1,
                }}
              >
                {onEdit && (
                  <IconButton size="small" color="primary" onClick={() => onEdit(cat.id)}>
                    <EditIcon />
                  </IconButton>
                )}

                {onDelete && (
                  <IconButton size="small" color="error" onClick={() => onDelete(cat.id)}>
                    <DeleteIcon />
                  </IconButton>
                )}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
