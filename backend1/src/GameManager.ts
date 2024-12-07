export class GameManager {
  private games: Game[]; // list of the games
  private pendingUser: WebSocket; // users waiting to be connected
  private users: WebSocket[];

  constructor() {
    this.games = [];
  }

  addUser(socket: WebSocket) {
    this.users.push(socket);
  }

  removeUser(socket: WebSocket) {
    this.users = this.users.filter((user) => user !== socket);
    // Stop the game here because the user left
  }

  private handleMessage() {}
}
