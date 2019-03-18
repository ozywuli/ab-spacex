export default function(server) {
  server.createList('comment', 10);
  server.loadFixtures();
}
