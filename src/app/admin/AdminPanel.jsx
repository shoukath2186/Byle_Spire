import React, { useState, useEffect } from 'react';
import { Users, MessageSquare, Trash2, Mail, Phone, Calendar, Clock, CheckCircle, Star } from 'lucide-react';

const AdminPanel = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    takeData()
  }, [])

  const takeData = async () => {
    try {
      const response = await fetch('/api/admin');
      const result = await response.json();
      if (result.success) {
        setMessages(result.data);
        console.log(result.data);
      } else {
        console.error('Failed to fetch messages:', result.message);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'text-blue-600 bg-blue-100';
      case 'read': return 'text-green-600 bg-green-100';
      case 'resolved': return 'text-green-600 bg-green-100';
      case 'in-progress': return 'text-orange-600 bg-orange-100';
      case 'blocked': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const markAsRead = async (message) => {
   
    try {
      const result = await fetch(`/api/admin/${message._id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'read' })
      });

      setMessages(messages.map(msg =>
        msg._id === message._id ? { ...msg, status: 'read' } : msg
      ));

      console.log(result);

    } catch (error) {
      console.error('Error updating message status:', error);
    }
  };

  const deleteMessage = async (messageId) => {
    // Remove the message locally
    
    // You can add an API call here to delete from the database
    try {
      await fetch(`/api/admin/${messageId}`, {
        method: 'DELETE'
      });
      setMessages(messages.filter(msg => msg._id !== messageId));
    } catch (error) {
      console.error('Error deleting message:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="border-b border-gray-200" style={{ backgroundColor: '#550065' }}>
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold" style={{ color: '#550065' }}>bS</span>
              </div>
              <h1 className="text-xl font-semibold text-white">biteSpire Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-white text-sm">
                <span>Admin User</span>
              </div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-sm font-medium" style={{ color: '#550065' }}>AU</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="px-6">
          <div className="flex space-x-8">
            <button
              className="py-4 px-2 border-b-2 font-medium text-sm transition-colors border-purple-700 text-purple-700"
              style={{ borderColor: '#550065', color: '#550065' }}
            >
              <MessageSquare className="w-4 h-4 inline mr-2" />
              Messages & Inquiries ({messages.length})
            </button>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="px-6 py-6">
        {messages.length === 0 ? (
          <div className="text-center py-12">
            <MessageSquare className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No messages yet</h3>
            <p className="text-gray-500">When customers send inquiries, they'll appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {messages.map((message) => (
              <div key={message._id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(message.status)}`}>
                        {message.status.charAt(0).toUpperCase() + message.status.slice(1)}
                      </span>
                      {message.status === 'new' && (
                        <span className="flex items-center text-sm font-medium text-orange-600">
                          <Star className="w-4 h-4 mr-1" />
                          New Message
                        </span>
                      )}
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        {message.name}
                      </span>
                      <span className="flex items-center">
                        <Mail className="w-4 h-4 mr-2" />
                        {message.email}
                      </span>
                      <span className="flex items-center">
                        <Phone className="w-4 h-4 mr-2" />
                        {message.phone}
                      </span>
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {formatDate(message.createdAt)}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {formatTime(message.createdAt)}
                      </span>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Message:</h4>
                      <p className="text-gray-700 leading-relaxed">{message.message}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div className="flex items-center space-x-3">
                    {message.status !== 'read' && (
                      <button
                        onClick={() => markAsRead(message)}
                        className="flex items-center px-4 py-2 text-sm font-medium text-green-600 bg-green-100 rounded-md hover:bg-green-200 transition-colors"
                      >
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Mark as Read 
                      </button>
                    )}
                    <span className="text-xs text-gray-500">
                      ID: {message._id.slice(-8)}
                    </span>
                  </div>
                  <button
                    onDoubleClick={() => deleteMessage(message._id)}
                    className="text-red-600 hover:text-red-900 p-2 rounded-md hover:bg-red-50 transition-colors"
                    title="Delete message"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminPanel;